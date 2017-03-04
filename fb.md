# facebook-automatic-poke
Automatically pokes and poke back all users in list

## 1) Go to pokes.
## 2) Remove all suggestions
## 3) Inspect element Console
## 4) Run the following script

```javascript
poke = function() {
    try {
        a = document.getElementsByClassName('_42ft _4jy0 _4jy3 _4jy1 selected _51sy');
        for (var i = 0; i < a.length; i++) {
            a[i].click();
        }
    } catch (e) {
        console.log('continue');
    }
    window.setTimeout(poke, 1000);
}
poke();
```
### 5) Keep the tab open And let your brows
