#!/bin/bash
. ./deploy_parameter.txt
#gcloud endpoints services deploy server-endpoints.yaml --project $ESP_PROJECT_ID 

CONFIG_ID=$(gcloud endpoints services deploy server-endpoints.yaml --project $ESP_PROJECT_ID 2>&1 | egrep -o -m 1 "202[0-9]-[0-9][0-9]-[0-9][0-9]r[0-9]+")
./gcloud_build_image -s $CLOUD_RUN_HOSTNAME -c $CONFIG_ID -p $ESP_PROJECT_ID > log.txt  2>&1 
IMAGE=$(cat .\\log.txt | egrep -o -m 1 "gcr.io\/.*${CONFIG_ID}")
./gcloud_build_image -s $CLOUD_RUN_HOSTNAME -c 2020-12-01r18 -p $ESP_PROJECT_ID 
gcloud run deploy $CLOUD_RUN_SERVICE_NAME --image="$IMAGE"  --allow-unauthenticated --platform managed --project=$ESP_PROJECT_ID
