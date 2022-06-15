import { observer } from "mobx-react";
import React, { useRef, useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import styled from "styled-components/native";
import Store from "../store";

interface TodoProps {}

// state를 전역에서 관리할 수 있으니까 따로 state를 만들지 않아도 된다.
// remove 역시 todo그대로를 던져주면 remove 메소드를 통해서 삭제가 가능하다.

// instance 생성
const store = Store.create({
  todoList: [{ id: 1, label: "buy milk" }],
});

const Todo = observer(() => {
  const [userInput, setUserInput] = useState("");
  const [input, setInput] = useState("");

  const handlePressAddButton = () => {
    store.addTodo({ id: Date.now(), label: userInput });
    setUserInput("");
  };
  const handlePressDeleteButton = (targetTodo: any) => {
    store.removeTodo(targetTodo);
  };

  console.log(store.todoList);

  return (
    <S.Container>
      <S.Row>
        <TextInput
          value={userInput}
          onChangeText={setUserInput}
          placeholder="적어라"
        />
        <Button title="Add" onPress={handlePressAddButton} />
      </S.Row>
      <S.Title>Todos:</S.Title>
      {store.todoList.map((todo) => {
        const handlePressModifyButton = (text: string = "") => {
          todo.setLabel(text);
        };
        return (
          <S.Row key={todo.id}>
            <TextInput onChangeText={setInput}>{todo.label}</TextInput>
            <Button title="X" onPress={() => handlePressDeleteButton(todo)} />
            <Button
              title="수정"
              onPress={() => handlePressModifyButton(input)}
            />
          </S.Row>
        );
      })}
    </S.Container>
  );
});

export default Todo;

const S = {
  Container: styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
  `,

  Row: styled.View`
    flex-direction: row;
    align-items: center;
  `,

  Title: styled.Text`
    font-size: 28px;
  `,
};
