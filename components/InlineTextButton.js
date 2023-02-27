import { Text, Pressable } from 'react-native';

import LoginStyle from '../styles/LoginStyle';

export default function InlineTextButton(props) {
  let style = {};
  if (props.color) {
    style.color = props.color
  };
  return (
    <Pressable onPress={props.onPress}>
      {({ pressed }) => (
        <Text 
          style={[pressed ? LoginStyle.pressedInlineTextButton : LoginStyle.inlineTextButton, style]}>
            {props.text}
        </Text>
      )}
    </Pressable>
  )
}