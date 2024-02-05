import {
  Button,
  Drawer,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { Fragment, useEffect, useMemo, useState } from "react";
import TypographyComponent from "../typography/typography.component";
import { RHFSelectMUI } from "../select/select.component";

const ModalComponent = ({
  estados,
}: {
  estados: {
    label: string;
    value: string;
  }[];
}) => {
  const [active, setActive] = useState<boolean>(false);
  const [state, setState] = useState<string>("");
    
  return (
    <Fragment>
      <Button onClick={() => setActive(true)}>Escolher Estado</Button>
      <Drawer
        anchor={"right"}
        open={active}
        onClose={() => {}}
        PaperProps={{
          sx: { width: "40%" },
        }}
      >
        <RHFSelectMUI
          name="estado"
          label="Escolha seu estado"
          options={estados}
        />
        <Button onClick={() => setActive(false)}>Fechar </Button>
      </Drawer>
    </Fragment>
  );
};
export const ModalComponent2 = ({
  estados,
}: {
  estados: {
    label: string;
    value: string;
  }[];
}) => {
  const [active, setActive] = useState<boolean>(false);
  const [state, setState] = useState<string>("");
    
  return (
    <Fragment>
      <Button onClick={() => setActive(true)}>Escolher Estado</Button>
      <Drawer
        anchor={"right"}
        open={active}
        onClose={() => {}}
        PaperProps={{
          sx: { width: "40%" },
        }}
      >
        <RHFSelectMUI
          name="estado2"
          label="Escolha seu estado"
          options={estados}
        />
        <Button onClick={() => setActive(false)}>Fechar </Button>
      </Drawer>
    </Fragment>
  );
};
export default ModalComponent;
