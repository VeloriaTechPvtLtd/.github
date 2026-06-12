"use client";

import * as React from "react"
import { ChevronDown } from "lucide-react"

export interface DropdownProps {
  options: { value: string; label: string }[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export function Dropdown({ options, value, onChange, placeholder = "Select option", className = "" }: DropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [dropdownPosition, setDropdownPosition] = React.useState<'below' | 'above'>('below')
  const dropdownRef = React.useRef<HTMLDivElement>(null)
  const buttonRef = React.useRef<HTMLButtonElement>(null)

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Calculate dropdown position when opening
  React.useEffect(() => {
    if (isOpen && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const spaceBelow = viewportHeight - buttonRect.bottom
      const spaceAbove = buttonRect.top
      
      // If there's not enough space below (less than 200px) and more space above, open upwards
      if (spaceBelow < 200 && spaceAbove > spaceBelow) {
        setDropdownPosition('above')
      } else {
        setDropdownPosition('below')
      }
    }
  }, [isOpen])

  const selectedOption = options.find(option => option.value === value)

  return (
    <div className={`relative ${className}`} ref={dropdownRef} data-dropdown>
      <button
        ref={buttonRef}
        type="button"
        className="w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-card border border-border rounded-lg text-foreground hover:border-black/30 focus:border-black focus:outline-none transition-all duration-200"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        data-dropdown
      >
        <span className="text-foreground font-medium">
          {selectedOption?.label || placeholder}
        </span>
        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div 
          className={`absolute z-50 w-full bg-card border border-border rounded-lg shadow-xl backdrop-blur-sm ${
            dropdownPosition === 'above' ? 'bottom-full mb-1' : 'top-full mt-1'
          }`}
          data-dropdown
          style={{
            boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
          }}
        >
          <div className="py-1 max-h-60 overflow-y-auto">
            {options.map((option, index) => (
              <button
                key={option.value}
                type="button"
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-left hover:bg-black/5 transition-colors duration-200 ${
                  index === 0 ? 'rounded-t-lg' : ''
                } ${
                  index === options.length - 1 ? 'rounded-b-lg' : ''
                } ${
                  option.value === value 
                    ? 'text-foreground bg-brand-dark-blue/5 font-medium' 
                    : 'text-foreground hover:text-black'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onChange(option.value);
                  setIsOpen(false);
                }}
                data-dropdown
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 