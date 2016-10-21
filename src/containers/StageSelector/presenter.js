import React, { Component } from 'react';
import {
  ListView,
  TouchableHighlight,
  StyleSheet,
  View,
  Text,
  Image

} from 'react-native'

class StageSelector extends Component {
  constructor(props) {
    super(props);
    this.navigator = props.navigator;
    this.onPress = this.onPress.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  onPress(wordGroup) {
    this.navigator.push({
      index: 1,
      data: wordGroup,
      title: wordGroup
    })
  }

  renderRow(rowData, sectionId, rowId) {
    return(
      <TouchableHighlight
        onPress={ () => this.onPress(rowData) }>
        <View style={ styles.item }>
          <Text style={ styles.text }>{ rowData }</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    const { groups, device } = this.props;
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let datasource = ds.cloneWithRows(groups);

    return (
      <Image
        style={styles.container}
        source={require('./images/chalk-background.jpg')}>
        <ListView contentContainerStyle={styles.list}
          dataSource={datasource}
          renderRow={ this.renderRow } />
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  text: {
    textAlign: 'center',
  },
  item: {
    justifyContent: 'center',
    backgroundColor: '#CCC',
    margin: 10,
    width: 100,
    height: 100
  }
});

module.exports = StageSelector;
