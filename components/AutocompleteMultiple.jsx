import {useCallback, useEffect, useRef, useState} from "react";
import {Autocomplete, AutocompleteItem, Button, Chip, cn} from "@heroui/react";
import IconX from '@icons/close_box.svg'
import IconCheck from '@icons/check.svg'

const AutocompleteMultiple = ({
                                  items = [],
                                  selectedKeys = [],
                                  onSelectionChange = () => null,
                                  primaryKey = "id",
                                  ...props
                              }) => {
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null);

    // Manage the selection of the items

    const handleSelectItem = (id) => {
        if (!id) return;
        if (!selectedKeys.map((key) => key.toString()).includes(id.toString())) {
            onSelectionChange([...selectedKeys, id]);
        } else handleRemoveItem(id);
        setInputValue("");
    };

    const filteredItems = inputValue ? items.filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase())) : items;
    const handleRemoveItem = (id) => onSelectionChange(selectedKeys.filter((i) => i.toString() !== id.toString()));

    // Manage the filled-within state for the label

    const selectedKeysRef = useRef(selectedKeys);

    const changeFilledWithin = useCallback((filledWithin) => {
        const isFilledWithin = !!(filledWithin === "true" || inputRef?.current?.getAttribute("data-filled-within") === "true");
        const filled = isFilledWithin || selectedKeysRef.current.length;
        inputRef?.current?.parentElement?.parentElement?.parentElement?.setAttribute("data-filled-within", !!filled ? "true" : "false");
    }, []);

    useEffect(() => {
        selectedKeysRef.current = selectedKeys;
        changeFilledWithin();
    }, [selectedKeys]);

    useEffect(() => {
        const handleMutation = (mutationsList) => {
            for (let mutation of mutationsList)
                if (mutation.type === "attributes" && mutation.attributeName === "data-filled-within")
                    changeFilledWithin(mutation?.target?.getAttribute("data-filled-within"));
        };

        if (inputRef.current) {
            const observer = new MutationObserver(handleMutation);
            observer.observe(inputRef.current, {attributes: true});
            return () => observer.disconnect();
        }
    }, []);

    return (
        <Autocomplete
            ref={inputRef}
            classNames={{
                base: "overflow-hidden",
                endContentWrapper: "absolute top-[0.4px] right-3",
            }}
            startContent={selectedKeys.map((id) => (
                <Chip
                    key={id.toString()}
                    classNames={{
                        base: "bg-white rounded-lg min-w-0",
                        content: "truncate",
                    }}
                    endContent={
                        <IconX className="rounded-full hover:bg-default/40 p-1 cursor-pointer size-5 mr-1"
                               onClick={() => handleRemoveItem(id)}/>
                    }
                >
                    {items.find((item) => item[primaryKey].toString() === id.toString())?.name}
                </Chip>
            ))}
            endContent={
                <Button
                    variant="light"
                    isIconOnly
                    size="sm"
                    className={cn("rounded-full opacity-0 group-data-[hover=true]:opacity-100 data-[hover=true]:bg-default/40", {
                        hidden: !selectedKeys.length,
                    })}
                    onPress={() => onSelectionChange([])}
                >
                    <IconX className="size-4"/>
                </Button>
            }
            selectedKey={null}
            isClearable={false}
            onSelectionChange={(id) => handleSelectItem(id)}
            inputValue={inputValue}
            onInputChange={setInputValue}
            inputProps={{
                classNames: {
                    label: "mt-2.5 group-data-[filled-within=true]:translate-y-0 group-data-[filled-within=true]:mt-0",
                    inputWrapper: cn(" block", {
                        "min-h-8": selectedKeys.length === 0,
                        "h-auto": selectedKeys.length > 0,
                    }),
                    innerWrapper: cn("flex flex-wrap gap-1 h-auto max-w-[calc(100%-4rem)]", {
                        "mt-3 -ml-1.5": selectedKeys.length === 0,
                        "mt-6": selectedKeys.length > 0,
                    }),
                    input: "w-20 h-7",
                },
            }}
            {...props}
        >
            {filteredItems.map((item) => (
                <AutocompleteItem
                    key={item[primaryKey]}
                    textValue={item.name}
                    endContent={selectedKeys.map((key) => key.toString()).includes(item[primaryKey].toString()) &&
                        <IconCheck className="fill-primary-700"/>}
                >
                    {item.name}
                </AutocompleteItem>
            ))}
        </Autocomplete>
    );
};

export default AutocompleteMultiple;