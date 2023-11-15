package lomDDeock.repository.cs;

import lomDDeock.entity.cs.CsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CsRepository extends JpaRepository<CsEntity,Integer> {


}
