import { paradas, routeCoordinates } from "constants/coordinates";
import { useEffect, useRef } from "react";
import { Image, StyleSheet, View } from "react-native";
import MapView, { AnimatedRegion, Marker, Polyline } from "react-native-maps";
import paradaIcon from '../assets/bus_pin.png'
import busIcon from '../assets/bus_icon.png'

export function MapContainer() {
  const mapRef = useRef<MapView | null>(null)

  const darkMapStyle = [
    {
      elementType: "geometry",
      stylers: [{ color: "#212121" }],
    },
    {
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }],
    },
    {
      elementType: "labels.text.fill",
      stylers: [{ color: "#757575" }],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [{ color: "#212121" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#383838" }],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [{ color: "#8a8a8a" }],
    },
  ]

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: -12.057468,
        longitude: -77.082931,
        latitudeDelta: 0.018,
        longitudeDelta: 0.005,
      }, 1000)
    }
  }, [])

  const markerPosition = useRef(new AnimatedRegion(routeCoordinates[0])).current;

  const moveMarker = () => {
    routeCoordinates.forEach((coordinate, index) => {
      setTimeout(() => {
        markerPosition.timing({
          latitude: coordinate.latitude,
          longitude: coordinate.longitude,
          useNativeDriver: false,
          duration: 1000,
        }).start();
      }, index * 1000);
    });
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      moveMarker();
    }, 5000)

    return () => clearTimeout(delay)
  }, []);

  return (
    <View
      className="flex-1"
    >
      <MapView
        ref={mapRef}
        style={StyleSheet.absoluteFill}
        initialRegion={{
          latitude: -12.057468,
          longitude: -77.082931,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        customMapStyle={darkMapStyle}
      >
        {paradas.map((parada, index) => (
          <Marker
            key={index}
            coordinate={parada}
          >
            <Image
              source={paradaIcon}
              style={{ width: 30, height: 30, resizeMode: "contain" }}
            />

          </Marker>
        ))
        }
        <Polyline
          coordinates={routeCoordinates}
          strokeWidth={3}
          strokeColor="rgba(255, 165, 0, 0.5)"
        />
        <Marker.Animated coordinate={markerPosition}>
          <Image
            source={busIcon}
            style={{ width: 30, height: 30, resizeMode: "contain" }}
          />
        </Marker.Animated>
      </MapView>
    </View>
  )
}
