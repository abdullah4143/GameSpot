import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

interface Props{
    onSelectSort : (sortOrder : string) => void;
    selectedOrder : string;
}

const SortSelector = ({onSelectSort ,selectedOrder} : Props) => {
    const SortOrder = [
        {value : '' , label : 'Revelence'},
        {value : '-added' , label : 'Date Added'},
        {value : 'name' , label : 'Name'},
        {value : '-released' , label : 'Release Date'},
        {value : '-metacritic' , label : 'Popularity'},
        {value : '-rating' , label : 'Average Rating'},   
    ];
    const CurrentSortOrder = SortOrder.find(sortOrder => sortOrder.value === selectedOrder );

    return (
        <Menu> 
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
             {CurrentSortOrder?.label || "Revelence"}
            </MenuButton>
            <MenuList>
                {SortOrder.map(item => <MenuItem onClick={()=> onSelectSort(item.value)} key={item.value} value={item.value}>{item.label}</MenuItem>)}
            </MenuList>
        </Menu>
      )
}

export default SortSelector