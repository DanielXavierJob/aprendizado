import { FormProvider as Form, FormProps, FormProviderProps, UseFormReturn } from 'react-hook-form';

// ----------------------------------------------------------------------
interface FormProvider {
  children: React.ReactNode,
  methods: UseFormReturn<any>,
  onSubmit: any
}
export default function FormProvider({ children, onSubmit, methods }: FormProvider) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
}

