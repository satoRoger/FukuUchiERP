#!/bin/bash
. ./deploy_parameter.txt
#gcloud endpoints services deploy server-endpoints.yaml --project $ESP_PROJECT_ID 
if [ $CLOUD_RUN_SERVICE_NAME = ""]; then
    echo "CLOUD_RUN_SERVICE_NAME is empty"
    exit
fi
if [ $CLOUD_RUN_HOSTNAME = ""]; then
    echo "CLOUD_RUN_HOSTNAME is empty"
    exit
fi

if [ $ESP_PROJECT_ID = ""]; then
    echo "ESP_PROJECT_ID is empty"
    exit
fi
if [ $REGION = ""]; then
    echo "REGION is empty"
    exit
fi
if [ $CLOUD_RUN_SERVICE_NAME = ""]; then
    echo "CLOUD_RUN_SERVICE_NAME is empty"
    exit
fi
DATE=$(date "+%Y%m%d-%H%M%S")
if [ $DATE = ""]; then
    echo "DATE is empty"
    exit
fi
gcloud endpoints services deploy server-endpoints.json --project $ESP_PROJECT_ID > "./output/deploy_api_${DATE}.txt" 2>&1
CONFIG_ID=$(cat .\/output\/deploy_api_${DATE}.txt | egrep -o -m 1 "202[0-9]-[0-9][0-9]-[0-9][0-9]r[0-9]+")
if [ $CONFIG_ID = ""]; then
    echo "CONFIG_ID is empty"
    exit
fi
./gcloud_build_image -s $CLOUD_RUN_HOSTNAME -c $CONFIG_ID -p $ESP_PROJECT_ID > "./output/image_build_${DATE}.txt"  2>&1 
IMAGE=$(cat .\/output\/image_build_${DATE}.txt | egrep -o -m 1 "gcr.io\/.*${CONFIG_ID}")
if [ $IMAGE = ""]; then
    echo "IMAGE is empty"
    exit
fi
./gcloud_build_image -s $CLOUD_RUN_HOSTNAME -c 2020-12-01r18 -p $ESP_PROJECT_ID 
gcloud run deploy $CLOUD_RUN_SERVICE_NAME --image="$IMAGE"  --allow-unauthenticated --platform managed --project=$ESP_PROJECT_ID
echo "CONFIG_ID=$CONFIG_ID"
echo "IMAGE=$IMAGE"