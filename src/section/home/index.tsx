"use client";

import ModalComponent, { ModalComponent2 } from "@/components/modal/modal.component";
import TextfieldComponent from "@/components/textfield/textfield.component";
import TypographyComponent from "@/components/typography/typography.component";
import { Button } from "@mui/material";
import { useMemo, useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "@/components/form/form.provider";

const HomePage = ({
  estados,
}: {
  estados: {
    label: string;
    value: string;
  }[];
}) => {
  const [estadoSchema, setEstadoSchema] = useState<any>({
    estado: Yup.string().required("Estado é obrigatório"),
    estado2: Yup.string().required("Estado é obrigatório"),
  });
  const defaultValues = useMemo(
    () => ({
      estado: "",
      estado2: "",
    }),
    []
  );
  const methods = useForm({
    resolver: yupResolver(Yup.object().shape(estadoSchema)),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    watch,
  } = methods;

  const onSubmit = handleSubmit(async (dataForm) => {
    console.log(dataForm);
    fetch('/api/estados', {
      method: "POST",
      body: JSON.stringify(dataForm)
    })
    .then((response) => response.json())
    .then((response) => {
      alert(response)
    })
  });
  return (
    <div>
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <TypographyComponent label="Escolha seu Estado" />
        <ModalComponent estados={estados} />
        <ModalComponent2 estados={estados} />
        <Button type="submit">Enviar</Button>
      </FormProvider>
    </div>
  );
};
export default HomePage;
