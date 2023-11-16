#!/usr/bin/env bash
set -uox pipefail

# Get protoc executions
go get github.com/regen-network/cosmos-proto/protoc-gen-gocosmos 2>/dev/null

# Get cosmos sdk from github
go get github.com/cosmos/cosmos-sdk@v0.45.10 2>/dev/null

cd 'src' || exit
echo "Generating proto code"

# Generate Static Protos
static_cosmos_dirs_regex='(bank|distribution|gov|slashing|staking)'
static_cosmos_proto_dirs=$(find -E . -iregex ".*\/staticProto\/cosmos\/$static_cosmos_dirs_regex.*\.proto")
for file in $static_cosmos_proto_dirs; do
  buf generate --template ./cfg/buf.gen.yaml "$file"
done

static_tendermint_dirs_regex='(abci)'
static_tendermint_proto_dirs=$(find -E . -iregex ".*\/staticProto\/tendermint\/$static_tendermint_dirs_regex.*\.proto")
for file in $static_tendermint_proto_dirs; do
  buf generate --template ./cfg/buf.gen.yaml "$file"
done

# Generate Custom Protos
proto_dirs=$(find ./proto -name '*.proto')
for file in $proto_dirs; do
  buf generate --template ./cfg/buf.gen.yaml "$file"
done
