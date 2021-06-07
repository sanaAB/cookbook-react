import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function ContactForm() {
  return (
    <form>
      <TextField label="Full Name" fullWidth autocomplete="none" />
      <TextField label="Email" fullWidth autocomplete="none" />
      <TextField
        label="Message"
        fullWidth
        multiline
        rows={5}
        autocomplete="none"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
