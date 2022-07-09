#!/bin/bash

port=3000
today=$(date +"%Y%m%d")
image=remix_app
container=remix_app
aliyun_registry=registry.cn-hangzhou.aliyuncs.com/biubiubiu_public

docker pull $aliyun_registry/$image:$today

docker ps -a | grep $container &>/dev/null

if [ $? -eq 0 ]; then
  docker rm -f $container
fi

docker run \
  --net redis \
  --detach \
  --publish $port:$port \
  --name $container \
  $aliyun_registry/$image:$today
