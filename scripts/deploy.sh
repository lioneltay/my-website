npm run build && \
aws s3 rm s3://lioneltay.com --recursive && \
aws s3 cp ./dist s3://lioneltay.com --recursive && \
aws cloudfront create-invalidation --distribution-id E1MWKWSMZFSYWH --paths /index.html