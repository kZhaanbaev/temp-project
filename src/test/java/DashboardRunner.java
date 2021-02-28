import io.cucumber.junit.Cucumber;
        import io.cucumber.junit.CucumberOptions;
        import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty" , "html:target/DashboardRunner",
                "rerun:target/Rerun_Failed/DashboardRunner.txt",
                "json:target/cucumberTestReport.json"},
        features = "src/main/resources/features/dashboard.feature",
        glue = {"steps"}
        , stepNotifications = true
        ,tags="@test"
        //   tags="@regression and @shakeout"
)


public class DashboardRunner {

}
