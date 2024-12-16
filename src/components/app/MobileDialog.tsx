import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { Menu } from "lucide-react"
import React from "react"

import { Button } from "@/components/core"

export const MobileDialog = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <Button size="md" variant="ghost" className="text-purple-950 dark:text-white">
        <Menu />
      </Button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black/50" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Title className="sr-only">Navigation Dialog</Dialog.Title>

        <Dialog.Close asChild>
          <button
            className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-slate-900 hover:bg-slate-900 focus:shadow-[0_0_0_2px] focus:shadow-slate-900 focus:outline-none"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)
