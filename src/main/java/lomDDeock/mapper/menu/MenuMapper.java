package lomDDeock.mapper.menu;

import lomDDeock.dto.menu.MenuDTO;
import lomDDeock.dto.menu.SideDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MenuMapper {
    public List<MenuDTO> selectMenues();
    public List<SideDTO> selectSides();
}
