package lomDDeock.dto.menu;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
public class MenuViewDTO {
    private MenuDTO menu;
    private SideDTO side;

    @Builder
    public MenuViewDTO () {

    }
}
