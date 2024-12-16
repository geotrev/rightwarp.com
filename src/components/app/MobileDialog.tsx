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
      <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-overlayShow" />
      <Dialog.Content className="fixed left-1/2 top-1/2 h-[100vh] w-[100vw] -translate-x-1/2 -translate-y-1/2 bg-white/50 p-5 backdrop-blur-md focus:outline-none data-[state=open]:animate-contentShow dark:bg-slate-950/50">
        <Dialog.Title className="sr-only">Navigation Dialog</Dialog.Title>

        <Dialog.Close asChild>
          <Button
            className="absolute right-5 top-5 inline-flex text-purple-950 dark:text-purple-100"
            variant="ghost"
            aria-label="Close"
          >
            <X size={24} />
          </Button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)
