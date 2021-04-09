import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  useWindowDimensions,
  BackHandler,
} from 'react-native';
import { LinearGradientButton } from '../components/LinearGradientButton';
import { THEME } from '../parametrs/theme';
import { modalShow } from '../store/actions/modal';

export const ModalAlert = () => {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;

  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();
  const response = (value) => {
    !value
      ? dispatch(modalShow({ show: false }))
      : (BackHandler.exitApp(), dispatch(modalShow({ show: false })));
  };

  const modal = useSelector((state) => state.modal);

  useEffect(() => {
    modal.show !== modalVisible ? setModalVisible(modal.show) : false;
  }, [modal]);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            flex: 1,
            width: width,
            height: height,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <View
            style={{
              width: width * 0.9,
              height: 300,
              top: height / 2 - 300 / 2,
              left: (width * 0.1) / 2,
              position: 'absolute',
            }}
          >
            <View style={styles.modalView}>
              <View style={styles.modalTitleContainer}>
                <Text style={styles.modalTitleText}>
                  {/* {visible.length ? visible[0].title : ''} */}
                  {modal.title}
                </Text>
              </View>
              <View style={styles.modalTextContainer}>
                <Text style={styles.modalText}>
                  {/* {visible.length ? visible[0].message : ''} */}
                  {modal.message}
                </Text>
              </View>
              <View style={styles.modalBottomContainer}>
                <View style={styles.modalButtonContainer}>
                  <LinearGradientButton
                    buttonLocation={styles.buttonLocation}
                    buttonStyle={styles.buttonStyle}
                    buttonTextStyle={styles.buttonText}
                    backgroundColor={THEME.MAIN_THEME.BACKGROUNDCOLOR_LG}
                    onPress={() => response(false)}
                    // text={visible.length ? visible[0].buttonCancel : ''}
                    text={modal.buttonCancel}
                  />
                  <LinearGradientButton
                    buttonLocation={styles.buttonLocation}
                    buttonStyle={styles.buttonStyle}
                    buttonTextStyle={styles.buttonText}
                    backgroundColor={THEME.MAIN_THEME.BACKGROUNDCOLOR_LG}
                    onPress={() => response(true)}
                    // text={visible.length ? visible[0].buttonYes : ''}
                    text={modal.buttonYes}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    position: 'absolute',
  },
  modalView: {
    backgroundColor: THEME.MAIN_THEME.BACKGROUNDCOLOR,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  modalTitleContainer: {
    minHeight: 50,
    width: '100%',
    backgroundColor: THEME.MAIN_THEME.BACKGROUNDCOLOR,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  modalTitleText: {
    color: THEME.MAIN_THEME.TEXT_COLOR,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  modalTextContainer: {
    minHeight: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    color: THEME.MAIN_THEME.TEXT_COLOR,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
  },
  modalBottomContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  modalButtonContainer: {
    width: '60%',
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLocation: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
  },
  buttonText: {
    color: THEME.MAIN_THEME.TEXT_COLOR,
    fontSize: 14,
  },
  buttonStyle: {
    borderRadius: 25,
    minWidth: 70,
    minHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
