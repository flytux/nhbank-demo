docker run -d -v $PWD/node1:/node1 -v $PWD/node1:/home -v $PWD/node1:/master \
              -p 22000:20100 -p 22001:20101 -p 22002:20102 -p 22003:20103 \
              -p 22004:20104 -p 22005:20105 \
              syneblock/quorum-maker:2.2.1_2.6.2 \
              /bin/bash start.sh
