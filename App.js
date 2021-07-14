import React, {Component} from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import ListItem from './components/ListItem';

export default class App extends Component {

state = {
    courseName: '',
    courses: []
}

courseSubmitHandler = () => {
    if(this.state.courseName.trim() === '') {
    return;
    }
    this.setState(prevState => {
      return {
            courses: prevState.courses.concat({
        key: Math.random(), 
        value: prevState.courseName
       })
       }
   });
   this.setState({
      courseName: ''
   });	
}

courseNameChangeHandler = (value) => {
  this.setState({
      courseName: value
    });    
}

coursesOutput = () => {
   return (
    <FlatList style = { styles.listContainer }
       data = { this.state.courses }
       keyExtractor={(item, index) => index.toString()}
           renderItem = { info => (
          <ListItem 
                courseName={ info.item.value }
           />
         )}
    />
    )
}

render() {
   return (
    <View style={ styles.container }>
       <View style = { styles.inputContainer }>
        <TextInput
           placeholder = "Add courses"
           style = { styles.placeInput }
                   value = { this.state.courseName }
           onChangeText = { this.courseNameChangeHandler }
        ></TextInput>
        <Button title = 'Add' 
           style = { styles.placeButton }
           onPress = { this.courseSubmitHandler }
        />
        
        </View>
            <View style = { styles.listContainer }>
        { this.coursesOutput() }
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
      container: {
    	  paddingTop: 30,
    	  justifyContent: 'flex-start',
    	  alignItems: 'center',
      },
      inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%'
      },
      placeInput: {
      width: '70%'
      },
      placeButton: {
      width: '30%'
      },
      listContainer: {
      width: '100%'
      }
});