package lomDDeock.controller.cs;

import lomDDeock.dto.cs.CsDTO;
import lomDDeock.dto.cs.CsPageResponseDTO;
import lomDDeock.dto.member.CsListPageResponse;
import lomDDeock.service.cs.CsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class CsController {
    private final CsService csService;

    @GetMapping("/getNoticeList")
    public ResponseEntity<CsListPageResponse> getNoticeList(@RequestParam(required = false, defaultValue = "1") int pg){
        return ResponseEntity.ok(csService.getNoticeList(pg));
    }
}