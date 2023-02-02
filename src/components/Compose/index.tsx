import React, { FormEvent, useState } from 'react';
import './Compose.css';
import { Button } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';

type Props = {
  addMessage: Function;
}
export default function Compose(props: Props) {
  const [value, setValue] = useState('')

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.addMessage(value);
    setValue('');
  }

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  return (
    <form onSubmit={submit} className="compose">
      <input
        type="text"
        value={value}
        className="compose-input"
        placeholder="Aa"
        onChange={change}
      />

      <Button type='submit' sx={{ padding: "0" }}>
        <TelegramIcon />
      </Button>
    </form>
  );
}