from setuptools import setup, find_packages

setup(
    name="grapl_analyzerlib",
    version="0.1.247",
    description="Library for Grapl Analyzers",
    url="https://github.com/insanitybit/grapl_analyzerlib/",
    author="insanitybit",
    author_email="insanitybit@gmail.com",
    license="MIT",
    classifiers=[
        "License :: OSI Approved :: MIT License",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.7",
    ],
    zip_safe=False,
    packages=find_packages(),
    include_package_data=True,
    install_requires=["pydgraph"],
)
