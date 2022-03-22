import React from 'react';
import { Link } from 'react-router-dom'

import { FaGamepad, FaHiking, FaCode, FaSkull } from "react-icons/fa"
import { GiBoxingGloveSurprise, GiBullseye } from "react-icons/gi"
import gamesData from '../../images/about/games/gamesData';
import adventuresData from '../../images/about/adventures/adventuresData';

// for videos
// import ReactPlayer from 'react-player';

import "./about.css"


const AboutPage = () => {

  const [games, setGames] = React.useState(gamesData);
  const [adventures, setAdventures] = React.useState(adventuresData);
  console.log(adventures)

  return (
    <>
      <div className="about-root-container">
        <div className="about-hero">
          {/* background image with me */}
          <h1>Hey, my namy is Long</h1>
          <h3>and I am a Software Engineer</h3>
          <button>Resume/CV</button>
          <button>Blog</button>
        </div>
        <div className="about-container">
          <div className="about-left-container">
            <h1>Who Am I?</h1>
            <p>Here's my story. I graduated with a Master's degreen for Software Engineering at the University of Western Ontario (aka Western University). I then started my career working at OSI Maritime Systems and as a side gig, I just learn about random things. I love to hike and I'm also a self-proclaimed "good" gamer.</p>
          </div>
          <div className="about-right-container">
            <img className="about-image-banner" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRUVFRUSGBIYGRgSEhgSGBESEhIRGBgZGRgYGBgcIS4lHB4sHxgYJjgmKy8xNTU1GiQ7QDs3Py40NTEBDAwMEA8QHxISHzQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NjQ0NDQ0NDQ0NDQ0NDY0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQACAwYBB//EAD8QAAICAQMCBAQEBAUDAgcBAAECABEDBBIhMUEFIlFhMnGBkRNCobEGYsHRFFJyguEjwvCy0jNDY4OSovEV/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgMBBAUABv/EACsRAAICAQQBBAICAQUAAAAAAAABAhEDBBIhMUEFEyJRMoFhcbEjQpHB0f/aAAwDAQACEQMRAD8A+fowqC5OsurypE1G7Gydo8Ea+Hp0ixBzHegEfgXIWNWxsicRZrzUYnJxE2uyWZbnKojsrpFMZuahLmGCMNKlmDDkVFWVTTybYxZKEBfrHONB7UjxRPS0hUzBzUhuiHwa3Msqz0PMsrxU5qiG+DFzNsKepH1MBbLbUvXpfvCNUFVCosPVk9yfn1mbk1cYSpKwE65DkyqGC9z8h+8NKGuhHznJaZqPP950Hhu8nyE/6G5Vh7eh+UUvUJxfKVBxyM3ZTNMCcyzY7ugQw+JT1+nrJpn5mjg1EM3K/wCBsZJsY4kAE8yJN8CWJ7nSW30XFF0JNRBSYz1OHiK8y1EMq5LTLfizw5bgjEyKYDkI3sIfmDOs1DyrwJUyW7B2WVqXeVETIFBGBeYzxrF+lHMb4kuVpF/CuDfTiTUmppjSD6w8QIfkWJOogm+SCsZ7L+9FLec4hm0yUTWohMopFkHMcaSKcQ5jnSpxLOFWNxLk1yPxFGpbmNs68RPqesZltILKa6eONGkS4HjvQPYEPA0RAOdOIIcJjVMdiQ6eW2rH7GwAYOIr1y7Z0mRKE57xRYrL+IvJGkLhkmOpzUK7n9pdRBsy+b9JlajM4xryytYZ4TpSx3V06DoL9z6dZnrUZmJsntfr/wAR5oNqIgFeblj7en7fb3jEeHpkPl6Dj5zKcuQ1G0cWunIqdX/DmGgL6XYPoYUngwND3Jm+n0+zcOKsEg8WpsEj7CLk7QUY0wrXuh7U49P/ADpObORRm4+Fj9mh+ssW18A0fb0gOTT72Uj8xq+waMwzcJqS8HXTs6bS4+JrkxymnteD1m7GemhNSipLpmvjqUbQBqMHEQeJJU6fUDicx4s0ifCEaiKURbIBMxN8SxCM5clCJDNXSZNIaCaoweZrNMkooiZELsL0p5jrTmKNMsaYO0rS7L+HoYrA9SnWHYFkz4pOGO6Q+atCFsEkZ/gSS/7SKvtHEKJeVl0ErFGjbCOY60g4ibH1j3QrxLmnDgrZNQvEQ6rrOk1KcTnNaOYWdcE5VRkkdeEmJkjfwc8xWF1IHF+SOt0ycQgJMtKOIUol5yNiEFQLlxcTnfFcM68pxEHjGLgwJO0Kz4Pi2cvpUtxfTvB282RvmSPkAAYZp/jA6Amj8rm2s0T3jyKnw2uUDoedm6YOs4mv6MijwA1tF8V+3/EM0m+uCb/pBtU7otKm9qFgDoa/5hnhy6kMCcKuhWzsYcAjkWT1lJoYuxh+IybkJPFMD6Bh+0z8xHJPHT5GONRpt6YnUG2Wju4IFfm9+0RZ/DtUACj47sjZtaq/1dDFrkY1Xg2ypaE1z0P0hWh8OpAT2BYX7jy/0nuLSugVcoW3HVeRuA6fOv2jjCLVR0tVI+1H9pG4hx+xfiy2qMe/kP8AqEKAirPlp3T08/8AvB7f+d44HQTe9NyOUHF+C/pJXFxfgw1HScx4qvWdRn6TmvFBNCa4I1L+ImUQjTzJVm2nXmV0jNj2bunECaMWHEXZjzJkqQyYPklUkeTHK8hafIfgjHC8XYRDcHWVpGhjfA40xmuRphp5bMYzB+Y+T4MrkmO+SadiLOLI5mqLPCvM3RJnJFFIqvUTofDk4iJE5E6PwscS3p3yOxR+RtqcXlnL6/H5p2eoXyzk/El80dnXxJzx4AAsZeE8NARC/D2ppXgvkivDiSO10Z4ENWLtC/EPQy7JGxilwEAcRN4unlMcK0VeKHgwEuxmV3A5PT4LLfMD5knp+86pMYdFTsSgc+oW2/pOcHFAepP16XOg0GTyp7ix9jU87rZXkf8AHBh1yxd4PqQcmZWHIyMBfdL8v6VOpzMq42KgdJy3i2m/Czq68LkRD/8AcUEEfYX9Iw1moBwFXfYGFb/Q9RXr06Si1bssQfxrydDpm240+ULyugFgC5yPhOsxKib87uV+HauRAOfzAdRyOseYtUmQbkZWXpa9L7iDJUNS8tGHiTbwPUEEe0X6bWh0FdUd0+hYlf3EZgrTg8sQa9gBf9VirRaPYrehN2e5oc/e50aoTldyMM6W2/7n5UP7Rsr8D5TPFjDIB3O5fl3/AKCRxVfL/ibPpUvm4/wFgk4tnmV+Ii8QEc5DxFOpxM7bVBLHgATbytRjbCyPchQBL4+sb6/wRkICKWpR+JyPj71cpg8CynqEWv8AMw6+nFzNWqxvm0I2NOgRukXanrHOs0T46Dir6Ecg/WKNUOZYcozjui7REkBNLY1nhE1xiVpMCMeQrFDtKOYGo4hmmErs0MaGuGe5FueYBN3SFhdTHyj8RdskhGySatFeji1HM3E2TSzYaW5npilgkCCP/CukATRxppMe2Owyp8jseFp2G6n4ZyfiIO6dXl5EUZ9HuPSOyzTVB5sLkqQgKmE6P4hGX/8Any2HRUYiEuSqtLJMdeHngRksX6UVDQ8vKaaNCEKRsDFfiRsGMd0A1h4P9fXtBlkjFNhZF8Tm2vdXoLH6/wDEfaPEWwY3HXqP9rH/ANtfWJGALMQwLFGHHNbR/wAdI+8AzhsCKK3KSx9tzMZ5nUyuTZjV8gX+OMZGmxZEPmV1ZSPSmA/9Ri/Q6pdTgKMF3EBgGohXEb+KYt+HLj7J5l/lNbqnD6NWTaRYYfp7RMfxJVqR2Hh/gecjZtC4z8VsNh/2BuftH+QJp8YUkBVHU9+5M5bT/wAVuiAFFJHeyP0qY782r3ZHJGJeFA4Vn7KPXtZgNN9lqWZyVf8AQz8J8UGTK7c0GKV/9N0G0n6ofvHOXIBjxCvi337BW2zlf4bW8rL3LkH0C8/2I+s6fMtlE/yqxPpyST+4nSSTK1t9g+kch9v5bBPtYaE5x5iPex9YvyBgX5qwCv0qMN4Zm9Qdp+Y4ml6ZNRy8/QzGrlRhkx8TPwttmZSejAr9TyP2hzC4O+E2CDRHIPoZr6p+5jcftDvbbCE1S73WwCHII/NwfT06T1fDsC72XHuZ3sBmLgE/EVDGl7nt1m+BRmXzWuRbUkEggnjt1HSepo2U/lPFDggKO5Avkn+k8vJbQU0++zLP4buxMhrgk42tmYEdLv7TgtctGj16T6NlXYh9aJufPPFDbe/UzU0EpbWn0JzV2AVN8SSiJC8aSxIHGiyLDcUw2yfiVAqy3GaiN8DQnI3EV6TLcOydJC+MrGqdorc8lN0ku+6KAUQTdEEVpqZuuqqIHrLEZqollcRYNRPBqZNBe6hwHlgBFqZDC1czqGKdmhUS6IJgDzCVNSaJTssJqHoEk0B1mCtzB9Y9uiDoKd/n+UfuftIyZPbg5AznsjY30mJsnsv6n+0y8d0iqEBUlRbuVUMwrkdxR4Pf1jPwtwABFn8W6gqwRSfPiINNQsuqrfr5iv6+sw8mWeR22Z2TJKXZzOtTaHIFcbjXrVUPtNvBHKorfzeb/SNor6bowx4l5LgmxXTuCYLhxDGhs8OzVx8O40P12frA3WqE7aY9bFQccWS1+44H7fvEmv8A4afIu/CLYfElgWPVb4+k6FHBYnsVr6mq/YxvoECqPWotSdjYxVHzrRfwrnZ1GVCmO/MSV3MPRQCefedjqtIqYiigKirSgdLHQfO45dbIJHTpF/iyG0H5b3n/AGyZNsYkkjkUB07ZMh5baSq/zEk/+3mPvDz5AzkF2Qbvmea9uoibNjLF8jWbWlX15G0fcCe6PKSNzGqO0D36dPrOb4EbeRtqUClSfb6m7/7TLJjU0ynrwZk9u6kE0LUV15FRifDfKOSDXzEbjyqP/ocI+QAvzNQ0FzoymmHPY9iJQORNzFljljaZbjIND7G3j5MPUesfYmDKPlzOQbOY98J1W5Qe44Moa3GotSXkr5kr3It/EKVhcjsP0E+ZanJuafVfEU34mHqCJ8u/whsjuDX2jNBK04laak6KYjCVepidMRIqGXHEiLlHwbHLM3eRcBJmzac1BaoJbmi2gzUajhsnESabAQYflsCDKNjYSajyeHLPIvZzJJpge4BYzCEQmZIph+nMIZBX2b4dNYlX01GMMDip7lUHmEW1FNA+HHCCKlcZAl8o4ucw0qRnjfmaHKYMhm4FybJTZtieZ+HDeWc9WN/Tt+lSZPKjn0Vj9aMvoOEHylDXz4USvqJPiIz02TaesXeLOcmpxDsCnv0Z3/7RJmzUQPWZc/jo1Hall24oeXat/wC56+vtMyis2hrrgo5PF9ff0maYFZRYPCkAUOt1ZhKYVY2ws+v9ptk0gCsU4NHqAwo/FxFsNx8lNHiJ835R39T04jbCZlo8quisKroQOgI4IhKCSkFao3VgIu8a1aBdtk5D/wDDReXb147D3mGv1xspio5PzE8pjvoSO5/l+9d6aPQhLdmJc85Hc8n+gHsOJLZ1mODSh1Jbj8u3oRUTHCbcKO7BR72aqO9R4jjWwhLv6YxYv3boPvBdIwGQO6AJ8RIcHY3PJA9wQfmD6xdAtro38IxncbHw1Y/mjzdMsOEBmP8AmhQSF0SwLU6dXHIinU6TZz2/aPnWYOoI5h4s0scrQUXRzT4+ZtoHKMR2IsS2qxbWI7dRB8j1tPof0PE2crjmwbl/YycVKNnUp5k+k5DUaUB2Fd51uge0+kQ+K49r36/vKWjnty198CMdbuRY2lFQc6QRjco4m0PlBMDTABNhjEldpC1TnEhRSPUwC55lQdJZHlMhnbSGlQE2nEk1Zp5O2idqFKLxKJlINQoJUyOLmcoEO10EYskLGQkQNUhmMQtg2MpGJy1N0yWJm+Dm4VpsM5wGRlKzA2J7+NGGTBxF74pCgFJyR5nzeRx/KR+kJ0D2BAtam3GT6kKPqf7Awzw9aWZfqH5JfwVssm5K/ox8WfYcTVZYkAep4ofrPdMSmwV52YOxO7aH55Fk8bvTnp9NfEnVjp1PLK+9RYF1Q/cj16dJXECVB20AVVqG4Fw3HHQ9OPr6ShL8UV/9zN9NmdNtA13V9z1YLfEOF4HA9Aes6bR50cCjzW4AgixxZF9RzVzmr/M/IKDcb8p4ZSKFniuv81TXBqti87hexT+GSX3NdDpQ6nj27c0sJSobaZvws7Yz8Lj8THfQEdQP/O0p4v4oA34aMob/AOY9jbjA6/7q+3fsCt12VmCHc67SRZYbx5jWw0OAK9TyebsRZ/hVO+23kEjzXtQA7vhJ56/ExokyEG50OMHiKqNmnQMe75OMe5rNgHlyeST+8w1DHIy7yz3RG+vw1NnaNopR3N+g+spYFC2eyQu1VI3AqoN2NoLfLr7zX8KyUW3FAlgR15HAB5A+p6e4ki3L7JdgVTVygK0Eo0PLXdrP0EvjHw0OeQvKgAg7SzHr6/0mYxdALo0VI53qPh2qP2+Y71CCGFLz5hsK7fP1BAI/LRHJ+/sNEph+g1u0lCeBbYzYP/TsjbY61x9CJZvEWJNK2wEBmPAHy9YIhAN0evIuyF79uwI/tJ4ozEIMZ8xO0j8rYz1v5dbhRjudJB22OsOSxweJ64uJvCNSdu1viU7SPlHKvBceQ06FfiGMke4ifMfKZ1GVLE53xpfwhuIOwnaxHO0twDXpdD6y7o86jeOXT/yNjJU0x74Y/lX5TDxtOL9OZPCG8i/IQrxFLErKTjJNeBK7OZLzM5J6ydfY1AtQSDx0npMT3wUl5LW9bbDka57mEG0pM3cGozYyFJNFAZHNzMXKsTO2MFyVFNskttkk7WL4M2xm6qV/wpuPP8OJvj04k+20WNsWxAdKanuPGY/OASJphJcWS4xQjGIw7T4TGC6cAzdMIhbUdFcgwxcSLoQe0MUCbY2Eh8BPk5b+I0AfFjHvkb/0r/3faE4cdLBtQ/4upyP+UEY0/wBKcH/9tx+sY5W2IT6An7Cec1eTflb/AEUZu5NnJ6/LeerNpW0dmYENtvtZ7xtpnCqtG1LqGPwsPM6k1ZpfhPYc1fFzl8mQht9AnduIJNG+oJBuuY802r3YyQG3gE0orbuqiRdA3x078cRUlSKifyY8ZwH2A2hJC7w5FbyFUnkcBW7/AJbmyJfUedQAASw8yHcjc8juR68dqgeJwwY2xVqPJVFZhXPvW5h1sX05MtpgT+Gu7z7PIzk7gzFb3sSFI6+xA6XzFB2ZnxIIDWw7ycYPx0LIbaa6+br8pfT4bZx8SEE4z5Ruako7SOvA5H79QNcE34ti+Xf+UbRutR363tN9JvkJO4gqTfB6jgDdTLfoRX3kJckvo3bjyM42puL2xDhrbkXwa59Dz2sQg7NzdWAZitotuSxIPJ4NHoD25gWBWG88MzF2O+ippjdAWAee/HsOg9DuKrzEjkAIhVzYAD9SQB6dBJ6I7GupxlWYttY0NzLTEtttgSOoFm+T2meQ7hubd044HN835aJvkzMKwRFYFVsgAAn8R6I+ZoDt2Xt39Um+WYmgRQAVjVWOnQ8QWSi5fadvr63y13fsOn6iMdFpFCKw5ZhZJJJ57D2ixehIvkc0SAP8xFDsOnpY9DOh0Y8iX1Iv78/1ml6fFbm66RZ0vMm2J/ENEyN+InyyD1H+YTfS6qxGrJEeu0hQ70+A9R/lP9oes013kj+xubHXyj+xvje4F4/iDYMnHRd3/wCPP9Jjp9VC2p0ZD0ZSp+RFTLfAhA3hPwiMdWLH0ijwVzt2twy+Rh/MDR/aOMp4nM45tsfnI9efrPG0lzbXDa6tCMbieg9Mnuw19MsY6caYPi0YEtlwCFFpnkeaQW1IXthnn+FhORxLY8gM7gCUUYf4SSH7hPJFojagFdUJoufiDYdPCjh4jEiebIdRNMee+JmuCRcdNOpBcsI3QjGeJVcdzTGsXJoOKKMYNrc+xHbuBx7seAPvUJzRZrScjqi/CpDZPdvyr9Ov2lfUZVixOT/RGSW2IH4Vh2gX1733M18cybcL+9L9yBDW0+2qiP8AiV6RF9Wv7D/meZXyZSlxEWeG6LemdiLVMTt/v2nb+xP0mXguQkVZ7FBtNgbuQr9a9r7XXp2Hgnh+zSsDw2RGdvbcpCj6Cv1nI6TDWMKAxBtww+JAKqvfoCL6ngd5d1GPZCP2xM4bUv5GOA+fhAG7glgCpquCdxHlYX14mqIxI8wBZWsBbC+YCwSaIvsKq/pKpis7jtqi4WwtqQD0I/y/r9ZEABHlFDclg7twuwpWuALN8d5ROPfE2G/FXBsbqsBjxx6ECHqwZ/z9aWiae0HmJqx9u3pFeuw7CgVtw3gt23HgHi6680P724XDvbcGG1GbaHamehyu0fm4Jr+Y8+kHALEqrEqRtblPK9F07gdCCq+p456cbhbHKgU28WQTkIXqxbqCCxrk2BN0xqNoKklgGJZhdEFa9AKbgWe/vNXY7GVLGIA0eCAbAJBohSN68f346zgfI4DfCCw3AgEggHp9LF0PX2nr5L53UOq3zfPHfv1+UrpDZyPYLByL6ccAFQeTwx59jLuePKAG5LVZqqDc9x6mzIJo8CsAAG81Fu1Agd/bt9T7TrlFUPpOc8L0yF/OxLEKaBAxlwSwoADpXS+x+U6KbGghUXL7LemVJss0zbmeOZmDc0VEs7uBbqvDz8Sfb+0y02cjhhGjzF8QbqJQz6BT+UOGU5xp2gdFG8sPzcn5gVGCG4ufSOPgNj0JowhHYDlHHvRI+4mZPTzg6aAuuwbxrDQuDIYTr8r5AE2kLfmJ449pQJNn0vHKEW5Kk+iYyfaKO8yd4UcJmWTBNVbWd7smxdqXmeLMRC8mCYPhhKCYuWVpl/8AFSQb8Iz2R7Z3usY4swqbfiCpz+m1BY1GAsQU7LsZWMkeWdu8DQ8T1nNe8KguhliyyxfmLceWbh7gOHIR7rNQFVm9BwPU9APvPPB8VCz1PJPqT1gWsO50T0/6jfsv9ftG+kWhPO+q5t2RY10v8iZu2W1GMEzmfHdKXzafH2diD6bRRb9AZ0ztzBcWENmD/wCRWA/1PX9AfvKmkhuypCtm5pB4HauOle04XIjUVcktwGKhdrsrGnuuLF/La3cTvKnE63GUzZEoBN9pxXDeahx2P3qpq+oxuCf8k6uFKLK6J3IUgbhTIAougtLyWHP9YeukbciIholgN5CkgDcOpAvknp394H4TqnxplVGXcG3UwZ1LGqAP5QL7DtzcLfxHKzAu7WCxDKbIQKwAsrYI5vrfPrxiuysC+M6Z02F1KlSgK2AL8/rx1DC/aOUw7djgE76XzU4spyarjduYc88GJtSzHEwYhyKZSGN31I68csTCMbNsVmNCk3Eguo55U0Cen7ESOTuAjQ6ljsQpkVEYqXdmJXHRIJNdiB/eWw4spVgqf9MKD1NDEW3FjZ7lkrnoeOKr3FlANUa+BviSmpuRQIrm/TpxJntRtB4ZgNiEngncvmPSrvvZ+simda+gZeXZbKgOSb203BNnjsAK+XtztmzmyAPbigdgANnv8r6/Wpjjw2zeY87TYu9w4BsCzd+naXXIQq2bBHxGhwAfMPmATx02zu0d5G3gDMMjIQACpJFVsCkAVZsDk8e86DbOb8GTbkTddk5AvJFlAvUVzwx/SdJum1oW3i/ZdwJuJi6zIQlhcpsl9MsJUYsJ4uOEBJ6Fk7hUkDMkpshjJM2FTkwdlgGVZREmueeYljk+CHj4NQvExyJNiZm5kIXsoDdJi2OEuJVRHKQuUAb8KSF7RJJ3sj2znfDsQsRw2IVJJARcSLYE4lsmKSSHfIZT8KaIs8knBtcAOA7suQ+jbB8lFfvcd4xQkknjtS280v7ZUMdQ9Ama6BKQX1bzH69B9qkkl70yK3Nh4PzYSZy/8TqEZWs29LQ6tXBPWgRan35kkmhrF/osPVpe2/0L9JlAY/CVIU3RreGq+l/mA6f3nup1A2l+u0FgpLcKSQOfkwF9ZJJgeTL8HrklSgFArVCqBoX8+hI+Zm6HYgDEALwy1YJ5q+tjj9ekkkCQa6N9HrfMoBDKg/Eo7lB6eRh+aq68X9eB01l5ArBvMobqAFIF1QHI7SSQG3YUYomPUE7wLCg+YFmI3Emvn0hD4/xMafBu3EMNpB4469D2P1kkg2HSGQzncgomjvJsE7gqgjngDy3wOsb6XVhztPDd6uuP/wCSSTQ0OSSltX2Him1LgOWWEkk2mXGQiZnrJJORHgq7TNzckkNEeAZxK3JJGo59E3SjGSSShfgydZiDPZI1C5Hm6SSSFQNn/9k=" alt="" />
          </div>
        </div>
        <div className="about-container">
          <div className="about-card">
            <FaGamepad size={100} />
          </div>
          <div className="about-card">
            <FaHiking size={100} />
          </div>
          <div className="about-card">
            <FaCode size={100} />
          </div>
        </div>
        <div className="about-container">
          <div className="about-left-container">
            <h1>Gaming</h1>
            <p>I used to be a super competitive gamer. I've achieved many achievements...<br /><br />Come at me bro <GiBoxingGloveSurprise color="red"/><FaSkull color="black" /><GiBullseye color="red" /></p>
          </div>
          <div className="about-right-container">
            {games.map(game => {
              return(
                <img key={game.game} className="about-image-collage" src={game.url} alt={game.game} />
              )
            })}
          </div>
        </div>
        <div className="about-container">
          <div className="about-left-container about-image-adventure-collage-container">
            {adventures.map(adventure => {
              return(
                <img key={adventure.title} className="about-image-adventure-collage" src={adventure.url} alt={adventure.title} />
              )
            })}
          </div>
          <div className="about-right-container">
            <h1>Adventures</h1>
            <p>I love to travel and go on hikes. I haven't been to many places but I hope to plan for many future excursions.</p>
          </div>
        </div>
        <div className="about-container">
          <div className="about-left-container">
            <h1>Coding</h1>
            <p>This is my story all about how I got to be who I am today. This is my story all about how I got to be who I am today. This is my story all about how I got to be who I am today.</p>
            <button className="about-body-button"><Link to="/projects">Projects</Link></button>
            <button className="about-body-button"><Link to="/projects">Resume/CV</Link></button>
          </div>
          <div className="about-right-container">
            placeholder
          </div>
        </div>
      </div>
    </>
  );
}


export default AboutPage;



