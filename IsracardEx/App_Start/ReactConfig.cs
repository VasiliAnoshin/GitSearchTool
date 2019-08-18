using JavaScriptEngineSwitcher.Core;
using JavaScriptEngineSwitcher.V8;
using React;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(IsracardEx.ReactConfig), "Configure")]

namespace IsracardEx
{
	public static class ReactConfig
	{
		public static void Configure()
		{
            ReactSiteConfiguration.Configuration.SetReuseJavaScriptEngines(true).SetLoadBabel(true).SetLoadReact(true).SetBabelVersion(BabelVersions.Babel7).AddScript("~/Scripts/App.js");
            JsEngineSwitcher.Current.DefaultEngineName = V8JsEngine.EngineName;
            JsEngineSwitcher.Current.EngineFactories.AddV8();
        }
	}
}