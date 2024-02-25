FROM maven:3.8.4-openjdk-17 AS build 
COPY . . 
RUN mvn clean package -DskipTestsc
 
FROM maven:3.8.4-openjdk-17-slim  
COPY --from=build /target/trip_india-0.0.1-SANPSHOT.jar trip_india.jar 
EXPOSE 8080 
ENTRYPOINT ["java","-jar","trip_india.jar"]