package utils;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class WebdriverUtils {


    //SINGLETON WEBDRIVER

    private static WebDriver driver;

    private static final String sauceUsername = LocalConfigUtils.getProperty("sauceUsername");
    private static final String sauceKey = LocalConfigUtils.getProperty("sauceKey");
    private static final String URL = "https://" + sauceUsername + ":" + sauceKey + "@ondemand.us-west-1.saucelabs.com:443/wd/hub";

    private WebdriverUtils() {

    }


    public static WebDriver getWebDriver() {
        if (driver == null) {
            if (!LocalConfigUtils.getProperty("runInSaucelabs").equalsIgnoreCase("true")) {
                String browserType = LocalConfigUtils.getProperty("browser");
                System.out.println("broswer::: " + browserType);

                switch (browserType.toLowerCase()) {
                    case "firefox":
                        System.setProperty("webdriver.gecko.driver", "E:\\KUBA\\TLA\\Batch-3\\libs\\geckodriver.exe");
                        driver = new FirefoxDriver();
                        break;
                    default:
                        System.setProperty("webdriver.chrome.driver", "E:\\KUBA\\TLA\\Batch-3\\libs\\chromedriver.exe");
                        driver = new ChromeDriver();
                        break;
                }
                driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
                return driver;
            }else{
                return driver = getRemoteDriver();
            }
        }else{
            return driver;
        }
    }

    public static void closeWebDriver() {
        if (driver != null) {
            driver.quit();
            driver = null;
        }
    }

    public static WebDriver getRemoteDriver(){
        WebDriver driver = null;
        try {
            DesiredCapabilities capabilities = DesiredCapabilities.chrome();
            capabilities.setCapability("browserName","chrome");
            capabilities.setCapability("version", LocalConfigUtils.getProperty("browser_version"));
            capabilities.setCapability("platform", LocalConfigUtils.getProperty("os"));
            driver = new RemoteWebDriver(new URL(URL), capabilities);
        }catch (MalformedURLException e){
            e.printStackTrace();
        }
        return driver;
    }

}







































