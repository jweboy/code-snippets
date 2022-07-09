#!/bin/bash

###
# @Author: jweboy
# @Date: 2021-12-23 14:29:56
# @LastEditors: jweboy
# @LastEditTime: 2022-01-07 11:41:14
###

today=$(date +"%Y%m%d")
image=remix_app
aliyun_registry=registry.cn-hangzhou.aliyuncs.com/biubiubiu_public
container=remix_app
port=3000

rm -rf build public

pnpm build

docker build -t $image:$today .
docker tag $image:$today $aliyun_registry/$image:$today
docker push $aliyun_registry/$image:$today
ssh aliyun "bash -s" <server.sh
