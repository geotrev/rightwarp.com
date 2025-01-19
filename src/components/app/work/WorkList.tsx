import { X } from "lucide-react"
import { useCallback, useMemo, useState } from "react"

import { Button, Container } from "@/components/core"

import { MediaCard, MediaCardProps } from "../shared/MediaCard"
import { ServiceList, ServiceListProps } from "../shared/ServiceList"

export interface WorkListProps {
  items?: MediaCardProps[]
}

export const WorkList = ({ items }: WorkListProps) => {
  const defaultFilterState = useMemo(
    () =>
      items?.reduce<{ name: string; isSelected: boolean }[]>((acc, item) => {
        const itemServices = item.services?.map((service) => service.name) || []
        const visibleSerices = acc.map((service) => service.name)

        for (const service of itemServices) {
          if (!visibleSerices.includes(service)) {
            acc.push({ name: service, isSelected: false })
          }
        }

        return acc
      }, []),
    [items],
  )

  const [filteredServices, setFilteredServices] = useState(defaultFilterState)

  const handleResetClick = useCallback(
    () => setFilteredServices(defaultFilterState),
    [defaultFilterState],
  )

  const handleClick: ServiceListProps["onClick"] = useCallback((name: string) => {
    setFilteredServices((services) => {
      return (
        services?.map((service) => ({
          ...service,
          isSelected: service.name === name ? !service.isSelected : service.isSelected,
        })) || services
      )
    })
  }, [])

  const noneFiltered = useMemo(
    () => !filteredServices?.some((service) => service.isSelected),
    [filteredServices],
  )

  // filter items by whether they contain a service that is isSelected
  const filteredItems = useMemo(() => {
    if (noneFiltered) {
      return items
    }

    return items?.filter((item) => {
      const itemServices = item.services?.map((service) => service.name) || []
      const selectedServices = filteredServices
        ?.filter((service) => service.isSelected)
        .map((service) => service.name)

      return itemServices.some((service) => selectedServices?.includes(service))
    })
  }, [items, filteredServices, noneFiltered])

  return (
    <Container tag="section" isConstrained className="grid gap-8 md:grid-cols-2">
      <div className="col-span-2 flex flex-col gap-2">
        <div className="text-sm font-bold uppercase">Filter by Service</div>
        <div className="flex flex-col justify-between gap-2 lg:flex-row lg:gap-4">
          <ServiceList asButtons services={filteredServices} onClick={handleClick} />
          {!noneFiltered && (
            <Button onClick={handleResetClick} variant="ghost" size="sm">
              <X size={16} /> Reset Filter
            </Button>
          )}
        </div>
      </div>
      {filteredItems?.map((item) => <MediaCard key={item.title} headingTag="h2" {...item} />)}
    </Container>
  )
}
