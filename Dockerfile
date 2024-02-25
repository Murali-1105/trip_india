# Stage 1: Build the application
FROM maven:3.8.4-openjdk-17 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Stage 2: Create a slim Maven image and copy the built artifact
FROM maven:3.8.4-openjdk-17-slim
WORKDIR /app
COPY --from=build /app/target/trip_india-0.0.1-SNAPSHOT.jar trip_india.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "trip_india.jar"]
