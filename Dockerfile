###
# @Author: jweboy
# @Date: 2022-01-06 22:11:14
# @LastEditors: jweboy
# @LastEditTime: 2022-01-06 22:14:14
###
FROM node:14-alpine as build

WORKDIR /home/app

COPY ["package.json", "pnpm-lock.yaml", "./"]
RUN npm i -g pnpm
RUN pnpm install

COPY . .

CMD ["pnpm", "start"]
