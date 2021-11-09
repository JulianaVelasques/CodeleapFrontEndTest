import React from 'react';
import { ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';

import { PostContent } from '../../components/PostContent';
import { PostInput } from '../../components/PostInput';

import { styles } from './styles';

export function MainScreen() {
  //@ts-ignore
  const posts = useSelector((state) => state.posts);
  //@ts-ignore
  const users = useSelector((state) => state.users);

  //Created to be able to get the username received from the input on the singUp page and set it as the name prop.
  const userMap = users.map((user: any) => user.user);

  //Create to be able to get the data to use when sorting the post and to setting the time prop.
  //Not implemented, but I'll keep trying
  const date = posts.map((post: any) => post.date);

  //This variable was created to render the new posts entries
  const renderedPosts = posts.map((post: any) => (
    <PostContent
      key={post.id}
      name={userMap}
      time={'25 minutes'}
      title={post.title}
      content={post.content}
      hasIcons={true}
      id={post.id}
    />
  ));

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <PostInput />
        {renderedPosts}
        <PostContent
          name={'SomeoneElse'}
          time={'2 days'}
          title={'Another Post Here'}
          content={
            'Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit. Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.'
          }
        />
      </View>
    </ScrollView>
  );
}
