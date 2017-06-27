import React, { Component } from 'react';

import {
	Container,
	Header,
	Title,
	Content,
	Button,
	Icon,
	SwipeRow,
	ListItem,
	Text,
	Left,
	Right,
	Body,
	Item,
	Input,
	View,
} from 'native-base';

import styles from './styles';

class BasicListSwipe extends Component {
	render() {
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="arrow-back" />
						</Button>
					</Left>
					<Body style={{ flex: 3 }}>
						<Title>Single List Swipe</Title>
					</Body>
					<Right />
				</Header>

				<Content scrollEnabled={false}>
					<SwipeRow
						leftOpenValue={75}
						rightOpenValue={-75}
						left={
							<Button
								full
								success
								style={{
									flex: 1,
									alignItems: 'center',
									justifyContent: 'center',
								}}
								onPress={() => alert('Add')}
							>
								<Icon active name="add" style={{ color: '#FFF' }} />
							</Button>
						}
						right={
							<Button
								full
								danger
								style={{
									flex: 1,
									alignItems: 'center',
									justifyContent: 'center',
								}}
								onPress={() => alert('Trash')}
							>
								<Icon active name="trash" />
							</Button>
						}
						body={<View style={{ paddingLeft: 20 }}><Text>Some Body Text</Text></View>}
					/>
				</Content>
			</Container>
		);
	}
}

export default BasicListSwipe;
