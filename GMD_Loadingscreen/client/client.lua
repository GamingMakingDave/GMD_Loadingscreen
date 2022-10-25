local ClientLoadESX = false

-- Automatic CloseUI works Extended 1.2 without MyMultichar and Legacy if you use Legacy dosn´t need 
-- TriggerEvent("GMD_Loadingscreen:CloseUI") changes!!!

AddEventHandler("playerSpawned", function ()
    if not ClientLoadESX then
        ShutdownLoadingScreenNui()
        ClientLoadESX = true
            DoScreenFadeOut(0)
            Wait(3000)
            DoScreenFadeIn(Cofing.FadeinTime)
    end
end)

-- Manual Loadingscreen CloseUI need for Extended 1.2 and MyMultichar see on WIKI: https://gmd-scripts.gitbook.io/gmd/
-- Clientside TriggerEvent("GMD_Loadingscreen:CloseUI") 
-- Server Side TriggerClientEvent("GMD_Loadingscreen:CloseUI")

RegisterNetEvent('GMD_Loadingscreen:CloseUI')
AddEventHandler('GMD_Loadingscreen:CloseUI', function()
    if not ClientLoadESX then
        ShutdownLoadingScreenNui()
        ClientLoadESX = true
            DoScreenFadeOut(0)
            Wait(3000)
            DoScreenFadeIn(Config.FadeinTime)
    end   
end)
