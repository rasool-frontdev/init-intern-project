import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { RegisterFormValues } from "../page";
import { FC } from "react";

interface FirstStepProps {
  form: UseFormReturn<RegisterFormValues>;
}

const FirstStep: FC<FirstStepProps> = ({ form }) => {
  return (
    <>
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter your name"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="surname"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Surname</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter your surname"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default FirstStep;
