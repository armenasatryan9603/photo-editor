import React, { useRef, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {
  // petqa poxvi refov indz tvuma
  // const elementRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    const element = document.getElementById('centre');  

    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const cr = entry.contentRect;
       
        const newHeight = cr.width * 0.5;
        element.style.height = `${newHeight}px`;
      }
    });

    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [])

  return (
    <View style={styles.body}>
      <View style={styles.header}></View>
      <View style={styles.container}>
        <View style={styles.leftMenu}></View>
        <View id="centre" style={styles.centeredDiv}></View>
        <View style={styles.rightMenu}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
  },
  header: {
    width: '100%',
    height: '60px',
    backgroundColor: 'yellow'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftMenu: {
    width: '100px',
    height: '100%',
    backgroundColor: 'lightblue',
  },
  centeredDiv: {
    flex: 1,
    backgroundColor: 'lightgreen',
    marginHorizontal: '20px'
  },
  rightMenu: {
    width: '150px',
    height: '100%',
    backgroundColor: 'lightcoral',
  },
});
