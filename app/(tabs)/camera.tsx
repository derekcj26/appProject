import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { GestureHandlerRootView, PinchGestureHandler, TapGestureHandler, State } from 'react-native-gesture-handler';
import Animated, { 
  useAnimatedGestureHandler, 
  useAnimatedProps, 
  useSharedValue, 
  runOnJS
} from 'react-native-reanimated';

const AnimatedCameraView = Animated.createAnimatedComponent(CameraView);

const MAX_ZOOM_FACTOR = 10; // Maximum zoom factor
const ZOOM_SPEED = 0.01; // Adjust this value to change zoom speed (lower = slower)

export default function App() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);

  const zoom = useSharedValue(0);
  const [currentZoom, setCurrentZoom] = useState(0);

  const cameraAnimatedProps = useAnimatedProps(() => ({
    zoom: zoom.value,
  }));

  const updateCurrentZoom = (newZoom: number) => {
    setCurrentZoom(newZoom);
  };

  const pinchHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.startZoom = zoom.value;
    },
    onActive: (event, ctx) => {
      const newZoom = ctx.startZoom + (event.scale - 1) * ZOOM_SPEED;
      zoom.value = Math.min(Math.max(newZoom, 0), 1);
      runOnJS(updateCurrentZoom)(zoom.value);
    },
    onEnd: () => {
      // Removed auto reset to 0
    },
  });

  const onTapHandler = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      focusOnPoint(event.nativeEvent);
    }
  };

  const focusOnPoint = (event) => {
    if (cameraRef.current) {
      const { locationX, locationY } = event;
      const touchPoint = {
        x: locationX,
        y: locationY,
      };
      cameraRef.current.focus(touchPoint);
    }
  };

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  function takePhoto() {
    console.log('Photo taken');
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <PinchGestureHandler onGestureEvent={pinchHandler}>
        <Animated.View style={styles.container}>
          <TapGestureHandler onHandlerStateChange={onTapHandler}>
            <AnimatedCameraView
              ref={cameraRef}
              style={styles.camera}
              facing={facing}
              animatedProps={cameraAnimatedProps}
            >
              <View style={styles.topRight}>
                <TouchableOpacity onPress={toggleCameraFacing}>
                  <Ionicons name="camera-reverse" size={36} color="white" />
                </TouchableOpacity>
              </View>

              <View style={styles.bottomCenter}>
                <TouchableOpacity onPress={takePhoto}>
                  <MaterialIcons name="camera" size={60} color="white" />
                </TouchableOpacity>
              </View>
            </AnimatedCameraView>
          </TapGestureHandler>
        </Animated.View>
      </PinchGestureHandler>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  topRight: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  bottomCenter: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  zoomControls: {
    position: 'absolute',
    top: 50,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  zoomText: {
    color: 'white',
    fontSize: 18,
    marginHorizontal: 10,
  },
});