#include <WiFi.h>
#include <HTTPClient.h>
#include <DHT.h>

// DHT Sensor
#define DHTPIN 15
#define DHTTYPE DHT22
DHT dht(DHTPIN, DHTTYPE);

// WiFi credentials
const char* ssid = "Wokwi-GUEST";
const char* password = "";

// Firebase configuration
const String FIREBASE_HOST = "moodpot-7f5cd-default-rtdb.firebaseio.com";
const String FIREBASE_AUTH = "UhJkkS4ScZsr57TJzoIYGcbDqgTrz2WhJmh94iN8";

void setup() {
  Serial.begin(115200);
  dht.begin();
  
  // Connect to WiFi
  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(300);
  }
  Serial.println("\nConnected!");
}

void sendToFirebase(String path, float value) {
  HTTPClient http;
  String url = "https://" + FIREBASE_HOST + path + ".json?auth=" + FIREBASE_AUTH;
  
  http.begin(url);
  http.addHeader("Content-Type", "application/json");
  
  int httpCode = http.PUT(String(value));
  if (httpCode > 0) {
    Serial.printf("Data sent to %s: %f\n", path.c_str(), value);
  } else {
    Serial.printf("Error sending data: %s\n", http.errorToString(httpCode).c_str());
  }
  http.end();
}

void loop() {
  delay(5000);
  
  float humidity = dht.readHumidity();
  float tempC = dht.readTemperature();
  
  if (isnan(humidity) || isnan(tempC)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }
  
  Serial.printf("Humidity: %.1f%%  Temperature: %.1f°C\n", humidity, tempC);
  
  // Send to Firebase
  sendToFirebase("/sensor_data/temperature", tempC);
  sendToFirebase("/sensor_data/humidity", humidity);
}
