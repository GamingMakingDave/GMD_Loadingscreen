Citizen.CreateThread( function()
    resourceName = "(" .. GetCurrentResourceName() .. ")"
    function checkVersion(err,responseText, headers)
        curVersion = LoadResourceFile(GetCurrentResourceName(), "version") -- make sure the "version" file actually exists in your resource root!
    
        if curVersion ~= responseText and tonumber(curVersion) < tonumber(responseText) then
            print("\n###############################")
            print("\n^2"..resourceName.." ^0is ^1outdated^0, should be:\n"..responseText.."is:\n"..curVersion.."\nplease update it from https://keymaster.fivem.net/assets")
            print("\n###############################")
        elseif tonumber(curVersion) > tonumber(responseText) then
            print("You somehow skipped a few versions of "..resourceName.." or the git went offline, if it's still online i advise you to update")
        else
            print("\n^2"..resourceName.." ^0is up to ^2date, ^5have fun!^0")
        end
    end
    
    PerformHttpRequest("https://dsarmysystem.sa-scripts.com", checkVersion, "GET")
    end)


