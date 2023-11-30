package lomDDeock.mapper.menu;

import lomDDeock.dto.menu.MenuDTO;
import lomDDeock.dto.menu.MenuPageResponseDTO;
import lomDDeock.dto.menu.SideDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MenuMapper {
    public List<MenuDTO> selectMains();
    public List<MenuDTO> selectMenues(int start);
    public List<SideDTO> selectSides(int start);
    public List<SideDTO> selectDrinks(int start);
    public int countMenu();
    public int countSide();
    public int countDrink();
}
