/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useForm } from "react-hook-form";
import Component from "./../../../components/singaleImageUpload";
import { useState } from "react";
import { useAddDivisionMutation } from "@/redux/features/division/division.api";
import { toast } from "sonner";

export function AddDivisionModal() {
    
    const [image, setImage] = useState<File | null>(null);
    const [open, setOpen] = useState(false)
   
     const [addDivision] = useAddDivisionMutation();
   

  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = async (data: any) => {
     

    const formData = new FormData();
    formData.append('data',JSON.stringify(data))
    formData.append('file', image as File)

    // console.log(formData.get('data'));s
    // console.log(formData.get('file'));
  

     try {
          const  res = await addDivision(formData).unwrap();
          toast.success("Division added") 
          setOpen(false)
     } catch (error) {
         console.log(error);
         
     }
    
    

  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger asChild>
          <Button>Add Division</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] ">
          <DialogHeader>
            <DialogTitle>Add Division</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form
              id="add-division"
              className="space-y-5"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>division Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Division Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Division Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
            
          </Form>
          <Component onChange ={setImage}/>

         

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" form="add-division">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
