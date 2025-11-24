CIOT_PATH := $(subst \,/,$(CIOT_PATH))

PB_CIOT_PATH := $(CIOT_PATH)/ciot_protos
PB_OUT := src/protos

gen-custom:
	protoc --plugin=protoc-gen-ts=..\..\node_modules\.bin\protoc-gen-ts.cmd --ts_out=$(PB_OUT) protos/*.proto --proto_path=$(PB_CIOT_PATH) --proto_path=protos
