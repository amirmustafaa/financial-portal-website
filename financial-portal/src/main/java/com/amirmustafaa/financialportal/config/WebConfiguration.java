package com.amirmustafaa.financialportal.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.PathMatchConfigurer;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration
public class WebConfiguration extends WebMvcConfigurerAdapter{
	
	  private static final String[] CLASSPATH_RESOURCE_LOCATIONS = {
	            "classpath:/META-INF/resources/", "classpath:/resources/",
	            "classpath:/static/", "classpath:/public/" };



	    @Override
	    public void addResourceHandlers(ResourceHandlerRegistry registry) {
	        registry.addResourceHandler("/**")
	                .addResourceLocations(CLASSPATH_RESOURCE_LOCATIONS);

	        registry.addResourceHandler("/vanilla/**")
	                .addResourceLocations("classpath:/vanilla/");

	            registry.addResourceHandler("/react/**")
	                    .addResourceLocations("classpath:/react/")
	                .resourceChain(true);
	    }

	    @Bean
	    public ViewResolver getViewResolver() {
	        InternalResourceViewResolver resolver = new InternalResourceViewResolver();
	        resolver.setSuffix(".html");
	        return resolver;
	    }

	    @Override
	    public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
	        configurer.enable();
	    }

	    @Override
	    public void configurePathMatch(PathMatchConfigurer configurer) {
	        configurer.setUseTrailingSlashMatch(true);
	    }

	    @Override
	    public void addViewControllers(ViewControllerRegistry registry) {
	        registry.addViewController("/react")
	                .setViewName("forward:/react/index.html");
	        registry.addViewController("/react/{path:[^\\.]*}")
	                .setViewName("forward:/react/index.html");
	        registry.addViewController("/react/**/{path:[^\\.]*}")
	                .setViewName("forward:/react/index.html");

	    }

}
