from node:18.13.0

RUN apt-get update \
    && apt-get install default-jre -y \
    && apt-get install default-jdk -y
RUN echo $(which java)
RUN echo $(whereis java)

RUN curl -sS -o - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add
RUN echo "deb https://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list
RUN apt-get -y update
RUN apt-get -y install google-chrome-stable

WORKDIR /taxfix_test
ADD . /taxfix_test/

# Setup JAVA_HOME -- useful for docker commandline
ENV JAVA_HOME /usr/lib/jvm/java-11-openjdk-amd64/
RUN export JAVA_HOME

RUN npm install

CMD whereis java && npm run test