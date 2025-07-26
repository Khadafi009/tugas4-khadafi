import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function IndexPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {}
      <Text style={styles.title}>5 nama sebelum </Text>
      <Text style={styles.firaCode}>Faturrohman Al khair</Text>
      <Text style={styles.oswald}>mursial arif abadi</Text>
      <Text style={styles.interItalic}>Muhammad ariel rexky ardiansyah</Text>
      <Text style={styles.openSansItalic}>auliya agustin</Text>
      <Text style={styles.latoBlack}>khairul anwar</Text>
      {}
      <Text style={styles.title}>5 nama sesudah</Text>
      <Text style={styles.mySoul}>Muhammadkhadafi</Text>
      <Text style={styles.montserratBold}>Muh fikri maulana</Text>
      <Text style={styles.robotoItalic}>MUH. hasrandin hasnan</Text>
      <Text style={styles.manrope}>Muhammad zulfikar hidayat</Text>
      <Text style={styles.ralewayItalic}>Ahmad yani</Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 25,
    alignItems: 'center',
    gap: 22,
    backgroundColor: '#33ffff',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#333',
  },

  firaCode: {
    fontFamily: 'FiraCode-Variable',
    fontWeight: '700',
    color: '#0d0d0eff',
  },
  montserratBold: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 27,
    color: '#3399ff',
  },
  mySoul: {
    fontFamily: 'MySoul-Regular',
    color: '#3333ff',
    fontSize: 24,
  },
  openSansItalic: {
    fontFamily: 'OpenSans-Italic',
    fontSize: 22,
    color: '#336633',
  },
  robotoItalic: {
    fontFamily: 'Roboto-ExtraBoldItalic', 
    fontSize: 24,
    color: '#0e0f0eff',
  },

  // Variable Fonts
  latoBlack: {
    fontFamily: 'Lato-Black',
    fontSize: 27,
    fontWeight: '400',
    color: '#333366',
  },
  interItalic: {
    fontFamily: 'Inter-Italic-Variable',
    fontSize: 26,
    fontWeight: '500',
    color: '#151515ff',
  },
  manrope: {
    fontFamily: 'Manrope-Variable',
    fontSize: 23,
    fontWeight: '600',
    color: '#330000',
  },
  oswald: {
    fontFamily: 'Oswald-Variable',
    fontSize: 24,
    fontWeight: '600',
    color: '#181718ff',
  },
  ralewayItalic: {
    fontFamily: 'Raleway-Italic-Variable',
    fontSize: 28,
    fontWeight: '400',
    color: '#0e0f0fff',
  },
});