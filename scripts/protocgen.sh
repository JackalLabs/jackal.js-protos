#!/usr/bin/env bash
set -uox pipefail

# Get protoc executions
go get github.com/regen-network/cosmos-proto/protoc-gen-gocosmos 2>/dev/null

# Get cosmos sdk from github
go get github.com/cosmos/cosmos-sdk@v0.45.10 2>/dev/null

cd 'src'
echo "Generating proto code"

# Generate Static Protos
buf generate --template ./cfg/buf.gen.yaml ./staticProto/third-party.proto

# Generate Custom Protos
proto_dirs=$(find ./proto -name '*.proto')
for file in $proto_dirs; do
  buf generate --template ./cfg/buf.gen.yaml $file
done
