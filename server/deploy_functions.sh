#!/bin/bash
. ./deploy_parameter.txt

i=0
for e in ${functions[@]}; do
    gcloud functions deploy ${e} --runtime nodejs10 --trigger-http
    let i++
done