import React from 'react';
import { ScrollView, View } from 'react-native';

import { OtherPost } from '../../components/OtherPost';
import { PostContent } from '../../components/PostContent';
import { PostInput } from '../../components/PostInput';

import { styles } from './styles';

export function MainScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <PostInput />

        <PostContent
          name={'@Juliana'}
          time={'25 minutes ago'}
          title={'My First Post At CodeLeap Network!'}
          content={
            'Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit. Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.'
          }
        />
        <OtherPost
          name={'@SomeoneElse'}
          time={'2 days ago'}
          title={'Another Post Here'}
          content={
            'Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit. Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.'
          }
        />
        <OtherPost
          name={'@SomeoneElse'}
          time={'3 days ago'}
          title={'Another Post Here'}
          content={
            'Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit. Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.'
          }
        />
        <OtherPost
          name={'@SomeoneElse'}
          time={'4 days ago'}
          title={'Another Post Here'}
          content={
            'Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit. Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.'
          }
        />
      </View>
    </ScrollView>
  );
}
