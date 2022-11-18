#!/usr/bin/env bash
set -uox pipefail

# Get protoc executions
go get github.com/regen-network/cosmos-proto/protoc-gen-gocosmos 2>/dev/null

# Get cosmos sdk from github
go get github.com/cosmos/cosmos-sdk@v0.45.10 2>/dev/null

cd 'src'
echo "Generating proto code"

# Generate Static Protos
static_dirs_regex='(bank|distribution|gov|staking)'
static_proto_dirs=$(find -E . -iregex ".*\/staticProto\/cosmos\/$static_dirs_regex.*\.proto")
for file in $static_proto_dirs; do
  buf generate --template ./cfg/buf.gen.yaml $file
done

# Generate Custom Protos
proto_dirs=$(find ./proto -name '*.proto')
for file in $proto_dirs; do
  buf generate --template ./cfg/buf.gen.yaml $file
done
